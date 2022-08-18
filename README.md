# Dr.Brown
ドクターブラウン

# 環境設定
### frontend
```
yarn

yarn dev

```

### backend
```
cd api

python -m venv .venv

.venv\Scripts\activate.bat

python -m pip install --upgrade pip setuptools

pip install -r requirements.txt

uvicorn main:app --reload

```
### docker

```
//  .envファイルを作成後、以下を記述

NX_PORT=3000
PY_PORT=8000
DB_NAME=ponecon
DB_USER=pone
DB_PASS=con
DB_PORT=3306
TZ=Asia/Tokyo
DB_ADMIN_PORT=8080


//  DockerDesktopを起動してから、コマンド実行

docker-compose build

docker-compose up -d


//  ※ コンパイルに時間がかかる為、最初の読み込みに時間がかかる。

```