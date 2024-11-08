# Projeto React + Python - Micro serviços

Utilizando React como o Front-End - Back-End

## Autores

- [@juanluisdev](https://www.github.com/juanluisdev)

## Demonstração
Backand com uma requisição get.
![image](https://github.com/user-attachments/assets/cd6c175d-018a-4955-bc44-d419f498b386)


Front end pegando a requisição e jogando no body da pagina.
![image](https://github.com/user-attachments/assets/5b0eb100-f6e1-4fc9-aec3-41a6669a450c)


## Codigo principal

import axios from "axios";
import {useState, useEffect} from "react";

Utilizando tambpem CORNS para passar na requisição do navegador.

app =  FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
    allow_origins=["http://localhost:3000"]
)
