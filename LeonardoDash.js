gapi.load('client', function() {
            gapi.client.init({
                apiKey: 'AIzaSyAxGbdWe639fXoxSAnogiMC_sJBFn5uXsk',
                discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
            }).then(function() {
                document.getElementById("buscarButton").addEventListener("click", buscarInformacoes);
            });
        });

        function buscarInformacoes() {
            const chave = document.getElementById("chaveInput").value;
            
            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: '1I4GB6KQVa_6254wcguR4BzG8FQn96slmWy0usPmxW5k',
                range: 'SITE!D:AM',
            }).then(response => {
                const values = response.result.values;
                if (values && values.length > 0) {
                    for (let i = 0; i < values.length; i++) {
                        if (values[i][0] === chave) {
                            document.getElementById("planilha").innerText = values[i][0];
                            document.getElementById("embarque").innerText = values[i][1];
                            document.getElementById("status").innerText = values[i][2];
                            document.getElementById("quemContratou").innerText = values[i][3];
                            document.getElementById("motorista").innerText = values[i][4];
                            document.getElementById("destinoFinal").innerText = values[i][5];
                            document.getElementById("cidadesEntrega").innerText = values[i][6];
                            document.getElementById("km").innerText = values[i][7];
                            document.getElementById("veiculo").innerText = values[i][8];
                            document.getElementById("frete").innerText = values[i][9];
                            document.getElementById("rastreada").innerText = values[i][10];
                            document.getElementById("refrigerado").innerText = values[i][11];
                            document.getElementById("divisoria").innerText = values[i][12];
                            document.getElementById("descarga").innerText = values[i][13];
                            document.getElementById("peso").innerText = values[i][14];
                            document.getElementById("entregas").innerText = values[i][15];
                            document.getElementById("agendado").innerText = values[i][16];
                            document.getElementById("volumes").innerText = values[i][17];
							document.getElementById("placa").innerText = values[i][20];
							document.getElementById("kmajustado").innerText = values[i][19];
                            return; // Encerra o loop após encontrar a chave
                        }
                    }
                    document.getElementById("status").innerText = "Planilha não encontrada.";
                } else {
                    document.getElementById("status").innerText = "Nenhum dado encontrado.";
                }
            }, response => {
                console.error('Erro ao buscar informações:', response.result.error.message);
            });
        }