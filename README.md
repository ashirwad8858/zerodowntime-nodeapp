# To get zero Down time you have twik little bit in your docker file. Check Docker file



# Initilize Docker swarm
docker swarm init

# Check node
docker node ls

# Run docker Image using docker swarm
docker service create -d -p 3000:3000 --replicas=5 backend

# Run this cmd in different terminal. This is the bash cmd that will continuous hit your api. It will hit 5 time in one second. You will see that when container will be healthy then requrest will go that container.
while true; do for i in {1..5}; do curl -s http://localhost:3000/api/ && echo; done; sleep 1; done

# In different terminal. Check your service and update. For List your running service
docker service ls

# Chane your code and create build again and update service.
docker service update --image=backend:2 service_name


docker service rm service_name

