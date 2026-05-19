# Root Dockerfile (placeholder)
# Build individual services from their own Dockerfiles.

FROM alpine:3.20
CMD ["sh", "-c", "echo 'Use service Dockerfiles (api-gateway/auth-service/file-service/client)'; sleep 3600"]
