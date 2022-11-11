const main_buttons = [
    [ 
        {str: '$\\rm a^2$', op: 'pow2'},
        {str: '$\\rm a^b$', op: 'pown'},
        {str: '|a|', op: 'abs'},
        {str: '$\\rm \\sqrt{}$', op: 'sqrt'},
        {str: '$\\rm \\sqrt[n]{}$', op: 'nrt'},
        {str: '$\\rm \\pi$', op: 'pi'},
        {str: '$\\rm \\sin$', op: 'sin'},
        {str: '$\\rm\\cos$', op: 'cos'},
        {str: '$\\rm \\tan$', op: 'tan'},
        {str: '(', op: 'par-l'},
        {str: ')', op: 'par-r'},
        {str: ',', op: 'comma'}
    ],
    [
        {str: '7', op: 'digit'},
        {str: '8', op: 'digit'},
        {str: '9', op: 'digit'},
        {str: '$\\rm \\div$', op: 'divide'},
        {str: '4', op: 'digit'},
        {str: '5', op: 'digit'},
        {str: '6', op: 'digit'},
        {str: '×', op: 'times'},
        {str: '1', op: 'digit'},
        {str: '2', op: 'digit'},
        {str: '3', op: 'digit'},
        {str: '−', op: 'minus'},
        {str: '.', op: 'dot'},
        {str: '0', op: 'digit zero'},
        {str: 'ans', op: 'answer'},
        {str: '+', op: 'plus'}
    ],
    [
        {str: 'mod', op: 'mod'},
        {str: '$\\rm \\frac{a}{b}$', op: 'frac'},
        {str: '$\\rm \\leftarrow$', op: 'leftarrow'},
        {str: '$\\rm \\rightarrow$', op: 'rightarrow'},
        {str: '<img src="./assets/icons/delete.svg" alt="delete char">', op: 'delete'},
        {str: '$\\rm \\hookleftarrow$', op: 'hookleftarrow'},
    ]
]

const abc_buttons = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['=','z','x','c','v','b','n','m',',','icon'],
    ['\\Uparrow','(',')','[',']','!','\'','\\pi','\\hookleftarrow']
]

const func_buttons = [
    ['\\sin','\\cos','\\tan','\\sin^{-1}','\\cos^{-1}','\\tan^{-1}','mean','stdev','stdevp','nPr','nCr','!'],
    ['a^b','\\sqrt{}', '\\sqrt[n]{}', 'e^x','abs','round','ln','log','icon','e','\\pi','\\hookleftarrow']
]
