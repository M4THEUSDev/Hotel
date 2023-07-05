let Hotel = prompt("Olá, seja bem vindo! Qual é o nome do Hotel?") || "Hotel";
// Ao acessar o sistema, pergunte o nome do Hotel e diga "O nome do hotel é {Hotel}". 

let Nome = prompt(`O nome do hotel é ${Hotel}".\n 
Me informe o seu nome?`);
// Ao acessar o sistema, pergunte o nome do usuário e uma senha. O nome do usuário não precisa de validação.

alert(`Bem vindo ao Hotel ${Hotel}, ${Nome}. É um imenso prazer ter você por aqui!.`);

let Senha = prompt(`${Nome}, me informe a sua senha:`);
// A senha deve ser 2678.  

while (Senha !== "2678") {
    alert(`Ops! ${Nome},  a está senha incorreta!`);
    Senha = prompt("Digite a sua senha novamente")
}

function inicio() {
    let opcao = parseInt(prompt(`Selecione a opção desejada:\n
    1.) Reserva de quartos\n
    2.) Cadastro de Hóspedes\n
    3.) Pesquisar Hóspedes\n
    4.) Evento\n
    5.) Buffet\n
    6.) Auditório\n
    7.) Restaurante\n
    8.) Abastacer veículo\n
    9.) Manutenção do ar\n
    10.) Sair`));

    switch (opcao) {
        case 1:
            reserva();
            break;
        case 2:
            cad_hospede();
            break;
        case 3:
            pesq_hospede();
            break;
        case 4:
            eventos();
            break;
        case 5:
            buffet();
            break;
        case 6:
            auditório();
            break;
        case 7:
            restaurante();
            break;
        case 8:
            abastecer();
            break;
        case 9:
            manutencao_ar();
            break;
        case 10:
            alert(`Muito obrigado e até logo, ${Nome}.`);
            sair();
            break;
        default:
            erro();
            break;
    }
}

function reserva() {
    let Diaria = parseFloat(prompt("Qual o valor padrão da diária?"));
    while (!Diaria || Diaria <= 0) {
        Diaria = parseFloat(prompt(`O valor da ${Diaria} é inválido! Tente novamente`));
    }
    let dias = parseInt(prompt("Quantas diárias serão necessárias?"));
    while (!dias || dias <= 0 || dias > 30) {
        dias = parseInt(prompt(`A diaria ${dias} é inválida, digite novamente.`));
    }
    alert(`O valor de ${dias} dias de hospedagem é de R$${Number(Diaria * dias)}`);
    let nome_hospede = prompt("Qual o nome do hóspede?");
    let confirmacao = prompt(`${nome_hospede}, você confirma a hospedagem para Carlos Moreira por 10 dias?  S/N`);
    switch (confirmacao.toLocaleUpperCase()) {
        case "S":
            alert(`${Nome}, reserva efetuada para ${nome_hospede}. O valor total é de R$${Number(Diaria * dias)}`);
            break;
        case "N":
            alert(`${Nome}, reserva não efetuada`);
            break;
        default:
            alert("Opção invalida, tente novamente");
            reserva();
            break;
    }
    inicio();
}

function cad_hospede() {
    let stop = 1;
    let valor_padrao = parseFloat(prompt("Qual o valor padrão da diária?"));
    while (!valor_padrao || valor_padrao <= 0) {
        valor_padrao = parseFloat(prompt(`O valor ${valor_padrao} é inválido, tente novamente!`));
    }
    let gratuito = 0;
    let meia = 0;
    let inteira = 0;
    while (stop) {
        let nome_Cad = prompt("Qual o nome do Hóspede?")
        if (nome_Cad.toLocaleUpperCase() == "PARE") {
            break;
        } else if (!nome_Cad) {
            alert("Não foi possível cadastrar o Hóspede. Tente novamente!");
            cad_hospede();
        }
        let idadeHospede = parseInt(prompt("Qual a idade do Hóspede?"));
        while (!idadeHospede || idadeHospede <= 0) {
            idadeHospede = parseInt(prompt("Digite uma idade válida."));
        }
        if (idadeHospede >= 0 && idadeHospede <= 6) {
            gratuito++;
            alert(`${nome_Cad} cadastrada(o) com sucesso. ${nome_Cad} Possui gratuidade`);
        } else if (idadeHospede >= 60) {
            meia++
            alert(`${nome_Cad} cadastrada(o) com sucesso. ${nome_Cad} Paga meia-entrada`);
        } else {
            inteira++
            alert(`${nome_Cad} cadastrada(o) com sucesso. ${nome_Cad} Paga inteira`);
        }
    }
    alert(`${Nome} o valor total das hospedagens é: R$${(inteira * valor_padrao) + (meia * valor_padrao / 2)}\n
     ${gratuito} Gratuidade(s):\n
     ${meia} Meia-entrada:`);
    inicio();
}

function pesq_hospede() {
    let menu = parseInt(prompt(`Selecione a opção desejada:\n
    1.) Cadastrar\n
    2.) Pesquisar\n
    3.) Listar\n
    4.) Sair`));
    switch (menu) {
        case 1:
            Cadastrar();
            break;
        case 2:
            Pesquisar();
            break;
        case 3:
            Listar();
            break;
        case 4:
            Sair();
            break;
        default:
            alert("A opção selecionada não existe.");
            pesq_hospede();
            break;
    }
}
let name_Hosp = [];
function Cadastrar() {
    let name_Hospede = prompt("Informe um nome de hóspede?");
    if (name_Hospede > 15) {
        alert("Máximo de Hóspedes cadastrados.");
        pesq_hospede();
    } else {
        alert(`O Hóspede ${name_Hospede} foi cadastrado com sucesso!`);
        name_Hosp.push(name_Hospede);
        pesq_hospede();
    }
}

function Pesquisar() {
    let pesquisar_Hosp = prompt("Qual o nome do Hóspede?")
    if (name_Hosp.includes(pesquisar_Hosp)) {
        alert(`Hóspede ${pesquisar_Hosp} foi encontrado`)
        pesq_hospede();
    } else {
        alert("Hóspede não encontrado");
        pesq_hospede();
    }
}

function Listar() {
    alert(`Lista dos Hóspedes:\n${name_Hosp.join("\n")}`);
    pesq_hospede();
}

function Sair() {
    alert(`${Nome} espero que tenha gostado do hotel, volte sempre!`);
    inicio();
}

function eventos() {
    const garcom = 10.50;
    let duracao = parseFloat(prompt("Qual a duração do evento em horas?"));
    let quant_garcom = parseInt(prompt("Quantos garçons serão necessários?"));
    while (duracao <= 0 || !duracao) {
        duracao = parseFloat(prompt("Digite uma quantidade de horas maior que zero."));
    }
    while (quant_garcom <= 0 || !quant_garcom) {
        quant_garcom = parseInt(prompt("Digite uma quantidade de garçom existente."));
    }
    if (prompt(`O custo total ficou de ${Number(quant_garcom * garcom * duracao)}\n
    Gostaria de efetuar uma reserva? S/N`).toUpperCase() == "S") {
        alert(`${Nome} reserva efetuada com sucesso!`);
    } else {
        alert(`${Nome} reserva não efetuada.`);
    }
    inicio();
}

function buffet() {
    let cafe = 0.2;
    let agua = 0.5;
    let salgado = 7;

    let quant_Convidados = parseInt(prompt("Digite a quantidade de convidados"));
    while (!quant_Convidados) {
        quant_Convidados = parseInt(prompt("Digite uma quantidade de convidados válida."));
    }
    while (quant_Convidados > 350 || quant_Convidados <= 0) {
        quant_Convidados = parseInt(prompt("Quantidade de convidados superior a capacidade máxima."));
    }
    let calc_Cafe = cafe * quant_Convidados;
    let calc_Agua = agua * quant_Convidados;
    let calc_Salgado = salgado * quant_Convidados;
    let calc_Total = (calc_Cafe * 0.8) + (calc_Agua * 0.4) + (calc_Salgado * 0.34);
    alert(`O evento precisará de ${calc_Cafe} litros de café, ${calc_Agua} litros de água, e ${calc_Salgado} salgados.\n
    O custo total do evento será de R$${calc_Total}`);
    let reservar = prompt("Gostaria de efetuar a reserva? S/N").toLocaleUpperCase();
    switch (reservar) {
        case "S":
            alert(`${Nome}, reserva efetuada com sucesso`);
            inicio();
            break;
        case "N":
            alert(`${Nome}, reserva não efetuada.`);
            inicio();
            break;
        default:
            alert("Opção invalida, tente novamente");
            buffet();
            break;
    }
}

function auditório() {
    let quantidade_Conv = parseInt(prompt("Qual o número de convidados para o seu evento?"));
    while (!quantidade_Conv) {
        quantidade_Conv = parseInt(prompt("Informe a quantidade de convidados válido."));
    }
    while (quantidade_Conv > 350 || quantidade_Conv <= 0) {
        quantidade_Conv = parseInt(prompt("A quantidade de convidados é superior a quantidade máxima."));
    }
    if (quantidade_Conv <= 220) {
        if (prompt(`Use o auditório Laranja (inclua mais ${quantidade_Conv - 150 < 0 ? (quantidade_Conv - 150) * -1 : quantidade_Conv - 150} cadeiras) \nGostaria de efetuar reserva? (S/N)`).toLocaleUpperCase() == "S") {
            alert("Reserva efetuada com sucesso!");
        } else {
            alert("Reserva cancelada.");
        }
    } else if(quantidade_Conv <= 350){
        if(prompt(`Use o auditório colorado \nGostaria de efetuar reserva? (S/N)`).toLocaleUpperCase() == "S") {
            alert("Reserva efetuada com sucesso!");
        } else {
            alert("Reserva cancelada.");
        }
    }
    inicio();
}

function restaurante() {
    var day = prompt(`HOTEL ${hotel} | Restaurante\nQual o dia do seu evento?`).toLocaleLowerCase();
    while(!day) {
        day = prompt("Digite um dia da semana válida:");
    }
    var hours = parseInt(prompt("Qual o horario do seu evento?"));
    while(!hours || hours <= 0) {
        hours = parseInt(prompt("Digite um horario válido:"));
    }

    if(day == "sabado" || day == "domingo" && hours <= 7 || hours >= 15) {
        alert("Restaurante indiponível.");
        inicio();
    } else if(day !== "sabado" || day !== "domingo" && hours >= 7 || hours <= 23) {
        var company = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para ${company}. ${day} às ${hours}hs.`);
    }

    inicio();
}

function abastecer_carros() {
    var wayneAlcool = parseInt(prompt(`HOTEL - ${hotel} | Abastecer\nQual o valor do álcool no posto Wayne Oil?`));
    var wayneGasolina = parseInt(prompt(`Qual o valor da gasolina no posto Wayne Oil?`));
    var StarkAlcool = parseInt(prompt(`Qual o valor do álcool no posto Stark Petrol?`));
    var StarkGasolina = parseInt(prompt(`Qual o valor da gasolina no posto Stark Petrol?`));

    if(wayneAlcool <= 0 || wayneGasolina <= 0 || StarkAlcool <= 0 || StarkGasolina <= 0 || !wayneAlcool || !wayneGasolina || !StarkAlcool || !StarkGasolina) {
        alert("Valor invalido! Tente novamente");
        abastecer_carros()
    }

    const [totalAlcoolWayne, totalGasolinaWayne, totalAlcoolStark, totalGasolinaStark] = [wayneAlcool * 42, wayneGasolina * 42, StarkAlcool * 42, StarkGasolina * 42];
    var type;

    if((wayneAlcool / wayneGasolina) <= 0.7 || (StarkAlcool / wayneGasolina) <= 0.7) {
        type = "álcool";
    } else {
        type = "gasolina";
    }

    var posto;
    if(totalAlcoolWayne + totalGasolinaWayne <= totalAlcoolStark + totalGasolinaStark) {
        posto = "Wayne Oil";
    } else {
        posto = 'Stark Petrol';
    }

    alert(`${username}, é mais barato abastecer com ${type} no posto ${posto}`);
    inicio();
}

function manutencao_ar() {
    var stop = 1;
    var companies = [];

   while(stop) {
        var companie = prompt(`Qual o nome da empresa?`) || `Empresa ${companies.length + 1}`;
        var pricePerDevice = parseFloat(prompt("Qual o valor por aparelho?"));
        while(pricePerDevice < 0 || !pricePerDevice) {
            pricePerDevice = parseFloat(prompt("Ops! Digite um valor valido:"));
        }
        var device = parseInt(prompt("Qual a quantidade de aparelho?"));
        while(device < 0 || !device) {
            device = parseFloat(prompt("Ops! Digite um valor valido:"));
        }
        var discount = parseFloat(prompt("Qual a porcentagem de desconto?")) || 0; 
        var minDeviceDiscount = parseInt(prompt("Qual o número de aparelhos para consegui o desconto?")) || 0;

        var budget = device >= minDeviceDiscount ? (pricePerDevice * device) * ((100 - discount) / 100) : pricePerDevice * device;

        companies.push({companie, budget});
        alert(`O serviço da ${companie} custará ${budget.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`)
        if(prompt(`Deseja informar novos dados, ${username}? (S/N)`).toLocaleLowerCase() == "n") {
            stop = 0;
        }
   }

   const melhorOrçamento = companies.reduce((a, b) => {
    return a.budget < b.budget ? a : b;
   })

   alert(`O orçamento de menor valor é o: ${melhorOrçamento.companie} por ${melhorOrçamento.budget.toLocaleString("pt-br", {styles: "currency", currency: "BRL"})}`);
   inicio();
}

function erro() {
    alert('Por favor, informe um número entre 1 e 10');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        window.open("", "_blank", "");
        window.close();
    } else {
        inicio();
    }
}


inicio();