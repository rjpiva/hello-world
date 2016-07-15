
var caso = 0;
var numFilhos = [];

function gravaCasos (arrayNos) {
	
	//premissa de que o nó do nível mais alto está na primeira posição
	
	if (arrayNos[caso].filhos.length != 0){
		
		numFilhos.push(arrayNos[caso].filhos.length);   //tamanho desse array é o número de condições em cada caso
		for (i = numFilhos[caso] , i > numFilhos[caso], i--){
			
		}
	}
  });
		
} */


var stack = "";

function traverse(o) {
    for (i in o) {
        if (!!o[i] && typeof(o[i])=="object") {
			
			if (o[i].hasOwnProperty("filhos") && o[i].filhos.length != 0){
				stack += o[i].filhos.condition_block + " ," ;
				console.log(i, o[i].idNo, o[i].condition_block);
            traverse(o[i] );		
			} 
			
			else
				return stack;
				traverse (o[i]);
            
        }
    }
} 

// Lista tudo seguindo 0, objetos de 0, 1 objetos de 2, 2 objetos de 2, conforme está na ordem do MyNode. 
function traverse1(o) {
    for (i in o) {
        if (!!o[i] && typeof(o[i])=="object") {
            console.log(i, o[i])
            traverse1(o[i] );
        }
    }
}   


//http://stackoverflow.com/questions/722668/traverse-all-the-nodes-of-a-json-object-tree-with-javascript


// Construtor de um nó padrão

var Node = function (condition_block, filhos, geracao, geracaoPai, idNo, idPai, literal, literalPai, pai, subGeracao, subGeracaoPai) {
	this.condition_block 	= condition_block; 
	this.filhos 			= filhos; 
	this.geracao 			= geracao; 
	this.geracaoPai 		= geracaoPai; 
	this.idNo 				= idNo; 
	this.idPai 				= idPai; 
	this.literal 			= literal; 
	this.literalPai 		= literalPai; 
	this.pai 				= pai; 
	this.subGeracao 		= subGeracao; 
	this.subGeracaoPai 		= subGeracaoPai;
	};
	
	
	
	
// Função para criar a hierarquia

function criaNos () {
	
	var myNode0 = new Node("-", [{condition_block : "Cond. A", filhoId: 1}, {condition_block : "Cond. B", filhoId: 2}], 1, 0, 0, "", "IF", "vazio", "vazio", 0, 0)
	var myNode1 = new Node("Cond. A", [{condition_block : "Cond. C", filhoId: 3}, {condition_block : "Cond. D", filhoId: 4}], 1, 0, 1, "0", "IF", "vazio", "vazio", 0, 0)
	var myNode2 = new Node("Cond. B", [], 1, 0, 2, "0", "IF", "vazio", "vazio", 0, 0)
	var myNode3 = new Node("Cond. C", [], 1, 0, 3, "1", "IF", "vazio", "vazio", 0, 0)	
	var myNode4 = new Node("Cond. D", [{condition_block : "Cond. E", filhoId: 5}, {condition_block : "Cond. F", filhoId: 6},  {condition_block : "Cond. G", filhoId: 7}], 1, 0, 4, "1", "IF", "vazio", "vazio", 0, 0)
	var myNode5 = new Node("Cond. E", [], 1, 0, 5, "2", "IF", "vazio", "vazio", 0, 0)
	var myNode6 = new Node("Cond. F", [], 1, 0, 6, "2", "IF", "vazio", "vazio", 0, 0)
	var myNode7 = new Node("Cond. G", [], 1, 0, 7, "2", "IF", "vazio", "vazio", 0, 0)

	myNode = [myNode0, myNode1, myNode2, myNode3, myNode4, myNode5, myNode6, myNode7]	
};


// var myNodeExample = new Node("A > B", [{condition_block : "C > D", filhoId: 4}, {condition_block : "FIM DO LAÇO", filhoId: 32}], 1, 0, 0, "", "IF", "vazio", "vazio", 0, 0)

// var myNode0 = new Node("-", [{condition_block : "Cond. A", filhoId: 1}, {condition_block : "Cond. B", filhoId: 2}], 1, 0, 0, "", "IF", "vazio", "vazio", 0, 0)
// var myNode1 = new Node("Cond. A", [{condition_block : "Cond. C", filhoId: 3}, {condition_block : "Cond. D", filhoId: 4}], 1, 0, 1, "0", "IF", "vazio", "vazio", 0, 0)
// var myNode2 = new Node("Cond. B", [], 1, 0, 2, "0", "IF", "vazio", "vazio", 0, 0)
// var myNode3 = new Node("Cond. C", [], 1, 0, 3, "1", "IF", "vazio", "vazio", 0, 0)
// var myNode4 = new Node("Cond. D", [{condition_block : "Cond. E", filhoId: 5}, {condition_block : "Cond. F", filhoId: 6},  {condition_block : "Cond. G", filhoId: 7}], 1, 0, 4, "1", "IF", "vazio", "vazio", 0, 0)
// var myNode5 = new Node("Cond. E", [], 1, 0, 5, "2", "IF", "vazio", "vazio", 0, 0)
// var myNode6 = new Node("Cond. F", [], 1, 0, 6, "2", "IF", "vazio", "vazio", 0, 0)
// var myNode7 = new Node("Cond. G", [], 1, 0, 7, "2", "IF", "vazio", "vazio", 0, 0)


//var myNode = [myNode0, myNode1, myNode2, myNode3, myNode4, myNode5, myNode6, myNode7]


