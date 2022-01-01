from typing import Optional
from fastapi import FastAPI
import requests
import pandas as pd

app = FastAPI()
URL = 'https://api.elrond.com/accounts/{}/transactions?size=10000'
wallet = 'erd152h9mns0luddcd4dedpw9w8l7dczalykdsnvr724u6g6rwprcq7s9xm2kl'

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/gas-fee")
def get_gas_fee():
    gas_fee = 0
    r = requests.get(URL.format(wallet))
    json_obj = pd.read_json(r.text)
    for fee in json_obj["fee"]:
        gas_fee += int(fee)
    egld_fee = gas_fee/1000000000000000000
    return egld_fee