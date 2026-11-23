const formulario = document.getElementById("formOrcamento");
const campoData = document.getElementById("data");

const hoje = new Date();
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, "0");
const dia = String(hoje.getDate()).padStart(2, "0");
campoData.min = ano + "-" + mes + "-" + dia;

function formatarData(valor) {
    if (!valor) return "Não informada";
    const partes = valor.split("-");
    return partes[2] + "/" + partes[1] + "/" + partes[0];
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const email = document.getElementById("email").value.trim();
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const local = document.getElementById("local").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const texto =
        "Olá, Mônica! Gostaria de solicitar um orçamento.\n\n" +
        "*Nome:* " + nome + "\n" +
        "*WhatsApp:* " + whatsapp + "\n" +
        "*E-mail:* " + (email || "Não informado") + "\n" +
        "*Tipo de serviço:* " + servico + "\n" +
        "*Data:* " + formatarData(data) + "\n" +
        "*Local:* " + (local || "Não informado") + "\n" +
        "*Mensagem:* " + (mensagem || "Sem mensagem");

    const numero = "5511996135259";
    const link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(texto);

    window.open(link, "_blank");
});