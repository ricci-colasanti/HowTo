function copyCode(block) {
    const codeBlock = document.getElementById(block);
    const range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges(); // clear previous selections
    window.getSelection().addRange(range); // add new selection
    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    window.getSelection().removeAllRanges(); // clear selection
    alert('Code copied to clipboard!');
}


