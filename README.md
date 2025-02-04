# Workshop 1 Client

You can execute the server using Docker.

> [!WARNING]
> The commands include `sudo` directive, for Windows users may change.

## Build the client

```bash
sudo docker build -t astro-client .
```
## Running the container in any platform

It couldn't be possible see the files writed, only using Docker Desktop in Windows.

```bash
sudo docker run -d -p 127.0.0.1:4321:4321 astro-client 
```

## Stop and delete the container

```bash
sudo docker rm $(sudo docker stop $(sudo docker ps -a -q --filter ancestor=astro-client --format="{{.ID}}"))
```

This command will delete all the containers (Including the stopped ones) with the image itself.
