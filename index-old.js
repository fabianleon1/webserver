const http = require("http");

http
  .createServer((req, res) => {
    //console.log(req)
    /*  const persona={

        id:1,
        nombre:'Fernando'
    } */
       // res.write(JSON.stringify(persona));
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')

    res.writeHead(200, { 'Content-Type':'application/csv'});

    res.write( 'id,nombre\n' );
    res.write( '1 ,Carlos\n' );
    res.end();
  

  })
  .listen(8080);

console.log("Escuchando el puerto", 8080);
