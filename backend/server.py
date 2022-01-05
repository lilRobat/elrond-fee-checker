import uvicorn
import subprocess

if __name__ == '__main__':
    subprocess.Popen(['python', '-m', 'https_redirect'])
    uvicorn.run("main:app",
                host="0.0.0.0",
                port=8000,
                reload=False,
                ssl_keyfile='/etc/letsencrypt/live/egldfees.com/privkey.pem',
                ssl_certfile='/etc/letsencrypt/live/egldfees.com/fullchain.pem'
                )