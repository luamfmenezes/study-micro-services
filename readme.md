## Blog micro-service example

## Contents

1. Micro-services
2. Event drive design
3. Bus event

## Libraries & Techs

1. Ingress-nginx (similar to kubernetes-ingress)
2. Skaffold

## Docker helpfull commands and Tips

1. docker build -t tag-name
2. docker run -it container-name command (sh -> go to inside the container), overwall default command
3. docker exec -it container-id command (sh -> go to inside the container)
4. docker ps -a -> list containers
5. docker logs container-name -> list all logs inside container
6. docker push image-name -> upload to docker-hub

## Kubernetes helpfull commands

1. kubectl apply -f file-name.yaml -> proccess the configs
2. kubectl get pods -> list all pods
3. kubectl exec -it pod-name command -> execute the command in a running pod (if it's running more than one container k8s will ask which container should be used), (use command: 'exit' to quit)
4. kubectl logs pod-name -> list logs
5. kubectl delete pod pod-name -> delete pod
6. kubectl describe pod pod-name -> print informations about the running pod
7. kubectl get deployments -> list deployments
8. kubectl rollout restart deployment deployment-name -> restart the deployment
9. kubectl get services -> list services

10. When kubernetes search for some container, if it contain the versions it'll looking first inside of the localmachine before to looking for in docker-hub i.g: container:0.0.1
11. It's possible create an alias to convert k -> kubeclt (unnecessary)

### NodePort

To access with Mac/Window use localhost:3xxxx
To access docker with Toolbox with Minikube -> minikubeIp:3xxxx/posts

## Kubernetes flux

Create docker-image -> upload to docker-hub -> deployment with pod for that image -> create services to comunication.

## Doubts

1. How to use local k8s?
