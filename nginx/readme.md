## Create localhost SSL Cert

- `openssl genrsa -out key.pem` => key.pem file
- `openssl req -new -key key.pem -out csr.pem` => csr.pem file
- `openssl x509 -req -days {number} -in csr.pem -signkey key.pem -out cert.pem` => cert.pem
