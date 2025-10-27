import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prisma = new PrismaClient();

async function main() {
 const comidasParaInserir = [
  {
    nome: "Hambúrguer Clássico",
    tipo: "Fast Food",
    preco: 25.50,
    descricao: "Pão de brioche, hambúrguer de carne, queijo, alface, tomate e maionese.",
  },
  {
    nome: "Pizza Margherita",
    tipo: "Italiano",
    preco: 45.00,
    descricao: "Molho de tomate, mussarela de búfala, manjericão e azeite.",
  },
  {
    nome: "Sushi Combo",
    tipo: "Japonês",
    preco: 80.00,
    descricao: "Seleção de niguiris, sashimis e rolls variados.",
  },
  {
    nome: "Salmão Grelhado",
    tipo: "Saudável",
    preco: 65.00,
    descricao: "Filé de salmão grelhado com legumes salteados e molho de maracujá.",
  },
  {
    nome: "Feijoada Completa",
    tipo: "Brasileira",
    preco: 55.00,
    descricao: "Feijão preto com carnes defumadas, acompanhado de couve, arroz e farofa.",
  },
  {
    nome: "Tacos de Carne",
    tipo: "Mexicano",
    preco: 35.00,
    descricao: "Tortillas de milho com carne moída temperada, queijo, pico de gallo e sour cream.",
  },
  {
    nome: "Lasanha à Bolonhesa",
    tipo: "Italiano",
    preco: 40.00,
    descricao: "Camadas de massa, molho à bolonhesa, molho branco e queijo gratinado.",
  },
  {
    nome: "Açaí na Tigela",
    tipo: "Sobremesa",
    preco: 20.00,
    descricao: "Açaí puro na tigela com granola e frutas frescas.",
  },
  {
    nome: "Milkshake de Chocolate",
    tipo: "Bebida",
    preco: 18.00,
    descricao: "Sorvete de chocolate batido com leite e calda de chocolate.",
  },
  {
    nome: "Bolo de Cenoura",
    tipo: "Sobremesa",
    preco: 30.00,
    descricao: "Bolo de cenoura fofinho com cobertura de chocolate.",
  },
  {
    nome: "Risoto de Funghi",
    tipo: "Italiano",
    preco: 50.00,
    descricao: "Arroz cremoso com cogumelos funghi secchi e queijo parmesão.",
  },
  {
    nome: "Camarão na Moranga",
    tipo: "Frutos do Mar",
    preco: 75.00,
    descricao: "Moranga recheada com camarões refogados no molho de creme de queijo.",
  },
  {
    nome: "Escondidinho de Carne Seca",
    tipo: "Brasileira",
    preco: 48.00,
    descricao: "Purê de mandioca cremoso cobrindo um recheio de carne seca desfiada.",
  },
  {
    nome: "Wrap de Frango",
    tipo: "Fast Food",
    preco: 28.00,
    descricao: "Tortilla de trigo recheada com frango desfiado, alface, tomate e molho especial.",
  },
  {
    nome: "Panqueca de Doce de Leite",
    tipo: "Sobremesa",
    preco: 22.00,
    descricao: "Massa fina de panqueca recheada com doce de leite e canela.",
  },
  { nome: "Filé Mignon ao Molho Madeira", tipo: "Carnes", preco: 70.00, descricao: "Filé mignon grelhado com molho madeira e champignon." },
  { nome: "Ceviche de Peixe Branco", tipo: "Frutos do Mar", preco: 60.00, descricao: "Cubos de peixe branco marinado em limão com cebola roxa e coentro." },
  { nome: "Moqueca de Peixe", tipo: "Frutos do Mar", preco: 68.00, descricao: "Ensopado de peixe com leite de coco, azeite de dendê, pimentões e tomate." },
  { nome: "Cuscuz Marroquino", tipo: "Árabe", preco: 42.00, descricao: "Sêmola de trigo com legumes e especiarias." },
  { nome: "Pudim de Leite Condensado", tipo: "Sobremesa", preco: 15.00, descricao: "Sobremesa clássica de leite condensado com calda de caramelo." },
  { nome: "Canjica Doce", tipo: "Brasileira", preco: 12.00, descricao: "Milho branco cozido com leite e especiarias." },
  { nome: "Espaguete ao Pesto", tipo: "Italiano", preco: 38.00, descricao: "Massa fresca com molho pesto de manjericão, azeite e nozes." },
  { nome: "Bobó de Camarão", tipo: "Frutos do Mar", preco: 65.00, descricao: "Purê de aipim com camarões e temperos." },
  { nome: "Coxinha de Frango", tipo: "Salgado", preco: 8.00, descricao: "Massa de coxinha recheada com frango desfiado." },
  { nome: "Pastel de Carne", tipo: "Salgado", preco: 7.50, descricao: "Pastel frito recheado com carne moída." },
  { nome: "Empadão Goiano", tipo: "Brasileira", preco: 45.00, descricao: "Torta salgada recheada com frango, linguiça, queijo e azeitona." },
  { nome: "Caldo Verde", tipo: "Sopa", preco: 25.00, descricao: "Sopa de batata com couve e linguiça portuguesa." },
  { nome: "Croissant de Queijo e Presunto", tipo: "Fast Food", preco: 15.00, descricao: "Massa folhada recheada com queijo e presunto." },
  { nome: "Torta Holandesa", tipo: "Sobremesa", preco: 35.00, descricao: "Torta com base de biscoito, creme holandês e cobertura de chocolate." },
  { nome: "Café Expresso", tipo: "Bebida", preco: 5.00, descricao: "Café forte e concentrado." },
  { nome: "Chocolate Quente", tipo: "Bebida", preco: 10.00, descricao: "Bebida cremosa de chocolate." },
  { nome: "Pão de Queijo", tipo: "Salgado", preco: 6.00, descricao: "Pão de queijo quentinho." },
  { nome: "Strogonoff de Frango", tipo: "Carnes", preco: 45.00, descricao: "Frango em cubos com molho cremoso, champignon, arroz e batata palha." },
  { nome: "Sushi Uramaki Salmão", tipo: "Japonês", preco: 30.00, descricao: "Roll de salmão, cream cheese e arroz." },
  { nome: "Tempurá de Camarão", tipo: "Japonês", preco: 40.00, descricao: "Camarões empanados e fritos." },
  { nome: "Canelone de Ricota com Espinafre", tipo: "Italiano", preco: 42.00, descricao: "Massa recheada com ricota e espinafre, coberta com molho branco." },
  { nome: "Esfiha de Carne", tipo: "Árabe", preco: 8.00, descricao: "Massa aberta recheada com carne." },
  { nome: "Shawarma de Frango", tipo: "Árabe", preco: 32.00, descricao: "Pão árabe recheado com frango e molho de alho." },
  { nome: "Pão Francês", tipo: "Padaria", preco: 2.00, descricao: "Pão crocante e macio." },
  { nome: "Baguete", tipo: "Padaria", preco: 5.00, descricao: "Pão longo e fino." },
  { nome: "Mini Churros com Doce de Leite", tipo: "Sobremesa", preco: 15.00, descricao: "Mini churros crocantes recheados com doce de leite." },
  { nome: "Torta de Frango com Requeijão", tipo: "Salgado", preco: 35.00, descricao: "Torta cremosa com recheio de frango e requeijão." },
  { nome: "Bife Acebolado", tipo: "Carnes", preco: 40.00, descricao: "Bife grelhado com cebolas salteadas." },
  { nome: "Arroz à Grega", tipo: "Acompanhamento", preco: 18.00, descricao: "Arroz com cenoura, ervilha, uva passa e pimentão." },
  { nome: "Batata Frita", tipo: "Acompanhamento", preco: 15.00, descricao: "Porção de batatas fritas crocantes." },
  { nome: "Salada Caesar", tipo: "Salada", preco: 30.00, descricao: "Alface, frango grelhado, croutons, queijo parmesão e molho caesar." },
  { nome: "Suco de Laranja", tipo: "Bebida", preco: 8.00, descricao: "Suco natural de laranja fresco." },
  { nome: "Coca-Cola", tipo: "Bebida", preco: 7.00, descricao: "Refrigerante de cola." },
  { nome: "Cerveja Artesanal", tipo: "Bebida", preco: 25.00, descricao: "Cerveja de fabricação artesanal." },
  { nome: "Empada de Palmito", tipo: "Salgado", preco: 9.00, descricao: "Empada recheada com palmito cremoso." },
  { nome: "Frango à Passarinho", tipo: "Petisco", preco: 38.00, descricao: "Frango frito em pequenos pedaços com alho e salsinha." },
  { nome: "Calabresa Acebolada", tipo: "Petisco", preco: 35.00, descricao: "Linguiça calabresa frita com cebolas." },
  { nome: "Pastel de Queijo", tipo: "Salgado", preco: 7.50, descricao: "Pastel frito recheado com queijo." },
  { nome: "Filé de Frango Grelhado", tipo: "Saudável", preco: 35.00, descricao: "Filé de frango grelhado com arroz e salada." },
  { nome: "Creme de Mandioquinha", tipo: "Sopa", preco: 28.00, descricao: "Creme aveludado de mandioquinha com especiarias." },
  { nome: "Torrada com Manteiga", tipo: "Café da Manhã", preco: 6.00, descricao: "Fatias de pão torrado com manteiga." },
  { nome: "Omelete de Queijo", tipo: "Café da Manhã", preco: 20.00, descricao: "Omelete de ovos com queijo e temperos." },
  { nome: "Pão na Chapa", tipo: "Café da Manhã", preco: 8.00, descricao: "Pão francês com manteiga na chapa." },
  { nome: "Sorvete de Creme", tipo: "Sobremesa", preco: 10.00, descricao: "Bola de sorvete de creme." },
  { nome: "Petit Gateau", tipo: "Sobremesa", preco: 25.00, descricao: "Bolo de chocolate com recheio derretido e sorvete." },
  { nome: "Mousse de Maracujá", tipo: "Sobremesa", preco: 15.00, descricao: "Mousse leve e refrescante de maracujá." },
  { nome: "Pão de Alho", tipo: "Petisco", preco: 12.00, descricao: "Pão recheado com creme de alho." },
  { nome: "Torta de Limão", tipo: "Sobremesa", preco: 30.00, descricao: "Torta com base de biscoito, recheio de limão e merengue." },
  { nome: "Salada de Frutas", tipo: "Sobremesa", preco: 20.00, descricao: "Mix de frutas frescas e suco de laranja." },
];

    try {
    const result = await prisma.comida.createMany({
      data: comidasParaInserir,
      skipDuplicates: true,
    });
    console.log(`Foram inseridos ${result.count} registros de comida com sucesso.`);
  } catch (error) {
    console.error("Erro ao inserir dados:", error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });