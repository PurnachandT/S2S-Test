
Steps to Set Up

To use the /paydart endpoint on Server 2, ensure that both servers are running simultaneously. Server 2 relies on Server 1 being active to fetch data from it.

1. Clone the repository:
   git clone https://github.com/PurnachandT/S2S-Test.git
   You will see two server folders.

2. Step 1:
   Navigate to the s1 folder, install dependencies, and start Server 1:
   cd s1
   npm install
   node index.js
   Server 1 runs on port 8000.

3. Step 2:
   Navigate to the s2 folder, install dependencies, and start Server 2:
   cd s2
   npm install
   node app.js
   Server 2 runs on port 8001.

Flow:

1. Create a .env file in the s1 folder and add the following information:
   API_URL=https://nodeserver.paydart.co/api/v1/open/orders/create
   merchant_key=
   merchant_secret=
   
2. Endpoints:
   - Server 1 has an endpoint at http://localhost:8000/api/v1/create, which returns a response from the Paydart server.
   - Server 2 has an endpoint at http://localhost:8001/paydart_transaction, which returns the payment_link by sending a request to Server 1 and extracting the payment_link from the response.

3. Testing:
   Open index.html in your browser. It will redirect you to a new tab to proceed with the transaction.
