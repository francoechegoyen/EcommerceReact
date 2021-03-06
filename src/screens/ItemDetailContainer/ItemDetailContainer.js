import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom';
import { dataBase } from '../../Firebase/firebase.js';
import { Alerta } from '../../components/alert/alert'

export const ItemDetailContainer = props => {

    const [detalleProducto, setDetalleProducto] = useState([])
    const [error, setError] = useState(false)
    const {productId} = useParams();

    useEffect(()=>{
        setError(false)
        const itemCollection = dataBase.collection("coleccion1");
        const item = itemCollection.doc(productId)

        item.get().then((doc) =>{
            if (!doc.exists){
                setError(true)
                return;
            }
            setDetalleProducto([{id: doc.id, ...doc.data()}])
        }).catch((error) =>{
            setError(true)
        })
    }, [])

    return<>
        {
            error ? <Alerta/>
            : detalleProducto.map((detalle) => <ItemDetail detalleProducto={detalle}/> )
        }
    </>
}