import React, { useState } from 'react';
import '../css/style.css'
function Insert({ onDataUpdate }) {
    const [Id_material, setIdmaterial] = useState('');
    const [nombre, setnombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [tipo_de_accesorio, setTipo_de_accesorio] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const usuario = {
            Id_material,
            nombre,
            precio,
            tipo_de_accesorio,
        };

        fetch('http://localhost/APIkamjac/api.php?apicall=CAccesorio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al crear el usuario');
                } else {
                    setMessage('Usuario creado correctamente');
                    setIdmaterial('');
                    setnombre('');
                    setPrecio('');
                    setTipo_de_accesorio('');
                    onDataUpdate(); // Llama a la función de actualización de datos en el componente padre
                }
            })
            .catch(error => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="Insert-container">
            <h2>Insert Elemento</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Id_Material">Id: </label>
                    <input className="input" type="text" id="Id_Material" value={Id_material} onChange={e => setIdmaterial(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="nombre">Nombre: </label>
                    <input className="input" type="text" id="nombre" value={nombre} onChange={e => setnombre(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="precio">Precio: </label>
                    <input className="input" type="text" id="precio" value={precio} onChange={e => setPrecio(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="tipo_de_accesorio">Tipo de accesorio: </label>
                    <input className="input" type="text" id="tipo_de_accesorio" value={tipo_de_accesorio} onChange={e => setTipo_de_accesorio(e.target.value)} required />
                </div>
                
                <button className='orange-btn' type="submit">Crear Material</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Insert;