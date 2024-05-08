
function chip(type: string, label: string): string {
    return `<span class="chip ${type}">${label}</span>`;
}

function highlight(type: string, text: string): string {
    return `<span class="highlight ${type}">${text}</span>`;
}

const html = {
    chip,
    highlight
}

export default html