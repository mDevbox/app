function domReady(condition: DocumentReadyState[] = ['complete', 'interactive']) {
  return new Promise(resolve => {
    if (condition.includes(document.readyState)) {
      resolve(true)
    } else {
      document.addEventListener('readystatechange', () => {
        if (condition.includes(document.readyState)) {
          resolve(true)
        }
      })
    }
  })
}

const safeDOM = {
  append(parent: HTMLElement, child: HTMLElement) {
    if (!Array.from(parent.children).find(e => e === child)) {
      parent.appendChild(child)
    }
  },
  remove(parent: HTMLElement, child: HTMLElement) {
    if (Array.from(parent.children).find(e => e === child)) {
      parent.removeChild(child)
    }
  },
}

/**
 * https://tobiasahlin.com/spinkit
 * https://connoratherton.com/loaders
 * https://projects.lukehaas.me/css-loaders
 * https://matejkustec.github.io/SpinThatShit
 */
function useLoading() {
  const ball2= `ball2`
  const styleContent = `
.${ball2} > div {
	width: 50px;
	height: 50px;
	background: transparent;
  border: solid 4px #0080ff;
	border-radius: 50%;
	left: 50%;
	position: relative;
	margin-left: -13px;
	margin-top: 5px;
}
.ball2:before{
	content: "";
	margin: -4px;
	width: 60px;
	height: 60px;
	position: absolute;
	border-radius: 50%;
	border: solid 4px transparent;
	border-bottom-color: #0080ff;
	border-top-color: #0080ff;
	animation: spinner 2s cubic-bezier(1, 0.01, 0.13, 0.39) infinite;
}

@keyframes spinner {
	0% {
		transform: rotate(0deg) scale(1);
	}
	50% {
		transform: rotate(60deg) scale(1.2);
	}
	100%{
		transform: rotate(360deg) scale(1);
	}
}

.app-loading-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.952);
  z-index: 99999;
}
    `
  const oStyle = document.createElement('style')
  const oDiv = document.createElement('div')

  oStyle.id = 'app-loading-style'
  oStyle.innerHTML = styleContent
  oDiv.className = 'app-loading-wrap'
  oDiv.innerHTML = `<div class="${ball2}"><div></div></div>`


  return {
    appendLoading() {
      safeDOM.append(document.head, oStyle)
      safeDOM.append(document.body, oDiv)
    },
    removeLoading() {
      safeDOM.remove(document.head, oStyle)
      safeDOM.remove(document.body, oDiv)
    },
  }
}

// ----------------------------------------------------------------------

const { appendLoading, removeLoading } = useLoading()
domReady().then(appendLoading)

window.onmessage = ev => {
  ev.data.payload === 'removeLoading' && removeLoading()
}

setTimeout(removeLoading, 4999)
