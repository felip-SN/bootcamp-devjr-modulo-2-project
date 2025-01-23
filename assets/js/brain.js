let sportVote = 0;
let simulateVote = 0;
let strategyVote = 0;

function SportsVote(){
    sportVote = sportVote + 1;
    document.getElementById('esportes').innerHTML = sportVote;
}

function SimulateVote(){
    simulateVote = simulateVote + 1;
    document.getElementById('simulacao').innerHTML = simulateVote;
}

function StrategyVote(){
    strategyVote = strategyVote + 1;
    document.getElementById('estrategia').innerHTML = strategyVote;
}

