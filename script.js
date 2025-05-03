const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

const addItem = async (it) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = it;
    document.body.append(div);
}

async function main() {
    
    let t = setInterval(() => {
        let last = document.body.lastElementChild;
        if (last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else {
            last.innerHTML = last.innerHTML + ".";
        }
    }, 100)

    let text = [
        "Initializing Hacking",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ]
    
    for (const it of text) {
        await addItem(it);
    }

    await randomDelay()
    clearInterval(t)
}
main()