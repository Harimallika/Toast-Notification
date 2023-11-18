let toastBox = document.getElementById('toastbox');
let SuccessMessage = ' <i class="fas fa-check-circle"></i> Successfully Submited.';
let errorMessage = ' <i class="fas fa-times-circle"></i> please fix the error!';
let invalidMessage = '<i class="fas fa-exclamation-circle"></i> Invalid input, check again.';

function showToast(Message){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = Message;
    toastBox.appendChild(toast);

    if(Message.includes('error')){
        toast.classList.add('error');
    }
    if(Message.includes('Invalid')){
        toast.classList.add('invalid');
    }
    setTimeout(()=>{
        toast.remove()
    }, 5000)
}
