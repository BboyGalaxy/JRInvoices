export const json = {
    "header": {
        "id_factura": "2",
        "numero_factura": "2",
        "fecha_factura": "2023-06-13 02:46:39",
        "id_cliente": "1",
        "nombre_cliente": "anonimo",
        "id_vendedor": "1",
        "usuario_nombre": "usuario administrador",
        "condiciones": "1",
        "total_venta": "5900",
        "estado_factura": "1"
    },
    "detail": [
        {
            "id_detalle": "1",
            "numero_factura": "2",
            "id_producto": "1",
            "cantidad": "1",
            "precio_venta": "5000",
            "nombre_producto": "Dell latitude"
        }
    ],
    "profile": {
        "id_perfil": "1",
        "nombre_empresa": "EL TIMBRE",
        "direccion": "Colonias Los Andes  #250",
        "ciudad": "SANTIAGO",
        "codigo_postal": "51000",
        "estado": "SANTIAGO",
        "telefono": "8092223333",
        "email": "eltimbre@gmail.com",
        "impuesto": "18",
        "moneda": "RD$",
        "logo_url": "img/1686419969_1431098283_691735_1431098420_noticia_normal.jpg"
    }
}

 export function renderizarFactura(json) {
	const payload = JSON.parse(json);
	console.log("renderizarFactura", payload);

	let content = `
		  <div>
			<table width="100%" >
			  <tbody>
				<tr>
				  <td style="width:80%">
					<h1 style="margin:0;">${payload.profile.nombre_empresa}</h1> 
					<h2 style="margin:0;">${payload.profile.direccion}</h2> 
					<h2 style="margin:0;">${payload.profile.telefono}</h2> 
				  </td>
				  <td style="text-align: right;" colspan="3" >
					  <img width="200px" height="125px" src="${payload.profile.logo_url}" alt="klk"/><br/></button>
				  </td>
				</tr>
			   
				<tr>
				  <td colspan="3"> 
					<hr/>
					  <span width="100%" align="center">
						<h3 style="margin:0;">Invoice #${payload.header.numero_factura}</h3>
					  </span>
					<hr/>
				  </td>
				</tr>
				
				<tr>
				  <td style="width:20%">
					<div style="display: inline-block;"> <h3 style="margin:0;">Customer:</h3> </div>
				  </td>
				  <td style="width:20%"> 
					<div style="display: inline-block;"> <p style="margin:0;">${payload.header.nombre_cliente}</p> </div>
				  </td>
				</tr>
  
				<tr>
				  <td style="width:20%">
					<div style="display: inline-block;"> <h3 style="margin:0;">NCF:</h3> </div>
				  </td>
				  <td style="width:20%"> 
					<div style="display: inline-block;"> <p style="margin:0;"></p> </div>
				  </td>
				</tr>
  
				<tr>
				  <td style="width:20%">
					<div style="display: inline-block;"> <h3 style="margin:0;">Box Number:</h3> </div>
				  </td>
				  <td style="width:20%"> 
					<div style="display: inline-block;"> <p style="margin:0;">#1</p> </div>
				  </td>
				</tr>
  
				<tr>
				  <td style="width:20%">
					<div style="display: inline-block;"><h3 style="margin:0;"> Date: </h3> </div>
				  </td>
				  <td style="width:20%"> 
					<div style="display: inline-block;"><p style="margin:0;" >${payload.header.fecha_factura}</p></div>
				  </td>
				</tr>
  
				<tr>
				  <td style="width:20%">
					<div style="display: inline-block;"> <h3 style="margin:0;"> Branch: </h3> </div>
				  </td>
				  <td style="width:20%"> 
					<div style="display: inline-block;"> <p style="margin:0;">${payload.profile.ciudad}</p> </div>
				  </td>
				</tr>
  
				<tr>
				  <td style="width:20%">
					<div style="display: inline-block;"> <h3 style="margin:0;">Time:</h3> </div>
				  </td>
				  <td style="width:20%"> 
					<div style="display: inline-block;"> <p style="margin:0;"></p> </div>
				  </td>
				</tr>
  
				<tr>
				  <td style="width:20%">
					<div style="display: inline-block;"> <h3 style="margin:0;">Employee:</h3> </div> 
				  </td>
				  <td style="width:20%"> 
					<div style="display: inline-block;"> <p style="margin:0;">${payload.header.usuario_nombre}</p> </div>
				  </td>
				</tr>
  
				<tr>
				  <td style="width:20%">
					<div style="display: inline-block;"> <h3 style="margin:0;">Pay Type:</h3> </div>
				  </td>
				  <td style="width:20%"> 
					<div style="display: inline-block;"> <p style="margin:0;"></p> </div>
				  </td>
				</tr>
  
				<tr>
				  <td style="width:20%">
					<div style="display: inline-block;"> <h3 style="margin:0;">Currency: </h3> </div>
				  </td>
				  <td style="width:20%"> 
					<div style="display: inline-block;"> <p style="margin:0;"></p> </div>
				  </td>
				</tr>
  
			  </tbody>
			</table>
			</br>
			<hr/>
			<table id="tabla_clientes" width="100%" >
			  <theader  style="background-color:#D3D3D3;">
					<th style="background-color:#D3D3D3;width: 10%;padding: 0;text-align: left;">#</th>
					<th style="background-color:#D3D3D3;width: 40%;padding: 0;text-align: left;">Description</th>
					<th style="background-color:#D3D3D3;width: 10%;padding: 0;text-align: center;">Price</th>
					<th style="background-color:#D3D3D3;width: 10%;padding: 0;text-align: center;">Quantity</th>
					<th style="background-color:#D3D3D3;width: 10%;padding: 0;text-align: center;">Tax %</th>
					<th style="background-color:#D3D3D3;width: 10%;padding: 0;text-align: right;">Total</th>
			  </theader>
			<tbody>
			`;
	let total = 0;
	let subTotal = 0;
	let sumTaxesPercent = 0;
	payload.detail.forEach((element) => {
		content += ` <tr>
						<td style="width: 10%;padding: 0;text-align: left;"> ${element.id_producto}   </td>
						<td style="width: 10%;padding: 0;text-align: left;"> ${element.nombre_producto}   </td>
						<td style="width: 10%;padding: 0;text-align: center;"> ${parseFloat(element.precio_venta).toFixed(2)} </td>
						<td style="width: 10%;padding: 0;text-align: center;"> ${element.cantidad}    </td>
						<td style="width: 10%;padding: 0;text-align: center;"> ${parseFloat(payload.profile.impuesto).toFixed(2)} </td>
						<td style="width: 10%;padding: 0;text-align: right;"> ${parseFloat(element.precio_venta * element.cantidad).toFixed(2)} </td>
					</tr>`;
		sumTaxesPercent += element.precio_venta * element.cantidad
		total += element.precio_venta * element.cantidad;
	});
	subTotal = total - sumTaxesPercent;
	content += `
			<tr >
			  <td colspan="7" style="width:100%;">
				</br>
			  </td>
			</tr>
			<tr >
			  <td colspan="7" style="width:100%;">
				<hr/>
				<h5 style="float: right;
				margin: 0;
				padding: 0;">Sub-Total: ${parseFloat(subTotal).toFixed(2)}</h5>
			  </td>
			</tr>
			<tr >
			  <td colspan="7" style="width:100%;">
			  <h5 style="
			  float: right;
			  margin: 0;
			  padding: 0;">Taxes-Amount: ${parseFloat(sumTaxesPercent).toFixed(
		2
	)}</h5></td>
			</tr>
			<tr >
			  <td colspan="7" style="width:100%;
			  "><h5 style="
			  float: right;
			  margin: 0;
			  padding: 0;">Total: ${parseFloat(total).toFixed(2)}</h5></td>
			</tr>
		  </tbody>
		</table>
		<div > 
		  <hr/>
		  <h4 style="margin:0;padding-bottom:30px;display: inline-block;">Note:</h4> <span style="display: inline-block;"></span>
		</div>
		</br>
	  </div>`;
	var ventana = window.open(
		"",
		"Invoice" + payload.numero_factura,
		"width=500,height=700"
	);
	setTimeout(() => {
		ventana.document.write(content);
	}, 1500);
	// setTimeout(() => {
	//   ventana.print();
	// }, 2000);
	console.log(payload);
}

