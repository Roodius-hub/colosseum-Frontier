###
Run  Docker Container : 
        ```docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=mydb -d -p 5432:5432     postgres```

Connection String :
        ``` DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb?schema=public" ```

