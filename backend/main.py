from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
import requests
import pandas as pd

app = FastAPI()
URL = 'https://api.elrond.com/accounts/{}/transactions?size=10000'
URL_CURRENCY = 'https://api.coingecko.com/api/v3/simple/price?ids=elrond-erd-2&vs_currencies=usd'

class Wallet(BaseModel):
    wallet_hash: str

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/gas-fee")
def get_gas_fee(wallet: Wallet):
    user_wallet = wallet.wallet_hash
    gas_fee = 0
    wallet_history = requests.get(URL.format(user_wallet))
    currency_data = requests.get(URL_CURRENCY)
    egld_price = currency_data.json()
    egld_price = egld_price["elrond-erd-2"]["usd"] 
    json_obj = pd.read_json(wallet_history.text)
    transactions = len(json_obj["fee"])
    for fee in json_obj["fee"]:
        gas_fee += int(fee)
    egld_fee = gas_fee/1000000000000000000
    avg_fee = egld_fee/transactions
    egld_price = egld_fee * egld_price
    return {"transactions": transactions, "fee": "{:.4f}".format(egld_fee), "avgFee": "{:.6f}".format(avg_fee), "egldPrice": "{:.2f}".format(egld_price)}