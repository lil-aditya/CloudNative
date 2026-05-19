FROM golang:1.22-alpine AS build
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . ./
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /bin/file-service ./main.go

FROM alpine:3.20
WORKDIR /
COPY --from=build /bin/file-service /file-service
EXPOSE 8080
ENTRYPOINT ["/file-service"]
