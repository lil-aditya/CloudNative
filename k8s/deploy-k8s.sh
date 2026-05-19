#!/usr/bin/env sh
set -e

kubectl apply -f namespace.yaml
kubectl apply -f secrets.yaml
kubectl apply -f persistent-volumes.yaml
kubectl apply -f auth-service.yaml
kubectl apply -f file-service.yaml
kubectl apply -f api-gateway.yaml
kubectl apply -f ingress.yaml

echo "Deployed CloudNative to Kubernetes."
