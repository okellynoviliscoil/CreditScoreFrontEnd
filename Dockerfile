FROM python:3.7-alpine
MAINTAINER Ofir Kelly (kelly.o@fibi.co.il)

COPY . /CreditScoreFrontEnd
WORKDIR /CreditScoreFrontEnd
RUN pip install -r requirements.txt
CMD ["python", "appFE.py"]