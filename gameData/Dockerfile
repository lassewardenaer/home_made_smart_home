FROM rust:1.66

WORKDIR /usr/src/gameData
COPY . .

RUN cargo install --path .

CMD ["gameData"]
