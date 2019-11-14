FROM python:3.7

RUN apt-get update -y && apt-get upgrade -y

RUN apt-get install git -y \
    && apt-get install -y python3.7 \
    && apt-get install -y python-pip

RUN python -m pip install selenium 

RUN python -m pip install pymongo

RUN bash \
    && echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' >> /etc/apt/sources.list

RUN wget https://dl.google.com/linux/linux_signing_key.pub \
    && apt-key add linux_signing_key.pub \
    && apt update -y \
    && apt-get install google-chrome-stable -y

RUN wget https://chromedriver.storage.googleapis.com/77.0.3865.40/chromedriver_linux64.zip
RUN apt-get install unzip -y
RUN unzip chromedriver_linux64.zip \
    && mv chromedriver /usr/bin/chromedriver 
#     && chown root:root /usr/bin/chromedriver \
#     && chmod +x /usr/bin/chromedriver 

ADD getGames.py ./

EXPOSE 27017

CMD [ "python3.7", "./getGames.py", "11" ]



