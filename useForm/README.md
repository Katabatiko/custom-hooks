# useForm Hook

Ejemplo:
```
    const initialForm = {
      name: '',
      email: '',
      ....
    }
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );
```

Con initialForm podemos definir los 'name' de los diferentes input que tenemos en el formulario