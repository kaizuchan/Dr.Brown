FROM python:3.9-slim-buster
WORKDIR /usr/src/app

RUN python -m pip install --upgrade pip setuptools
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--reload", "--host=0.0.0.0"]