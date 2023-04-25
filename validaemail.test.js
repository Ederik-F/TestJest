const ValidaEmail = require('./validaemail')

test ('email ederik.flores@upeu.edu.pe -> true', ()=>{
    expect(ValidaEmail.isValidEmail('ederik.flores@upeu.edu.pe')).toBe(true)
});
test ('email ederik.flores-> false', ()=>{
    expect(ValidaEmail.isValidEmail('ederik.flores')).toBe(false)
});
test ('email ederik.floresupeu.edu.pe-> false', ()=>{
    expect(ValidaEmail.isValidEmail('ederik.floresupeu.edu.pe')).toBe(false)
});
test ('email upeu.edu.pe-> false', ()=>{
    expect(ValidaEmail.isValidEmail('upeu.edu.pe')).toBe(false)
});
test ('email ederik.flores@-> false', ()=>{
    expect(ValidaEmail.isValidEmail('ederik.flores@')).toBe(false)
});
test ('email ederik.flores@upeu-> false', ()=>{
    expect(ValidaEmail.isValidEmail('ederik.flores@upeu')).toBe(false)
});
test ('email 1@-> false', ()=>{
    expect(ValidaEmail.isValidEmail('1@')).toBe(false)
});
test ('email ederik.flores@1-> false', ()=>{
    expect(ValidaEmail.isValidEmail('ederik.flores@1')).toBe(false)
});
test ('email @-> false', ()=>{
    expect(ValidaEmail.isValidEmail('@')).toBe(false)
});
test ('email 1-> false', ()=>{
    expect(ValidaEmail.isValidEmail('1')).toBe(false)
});