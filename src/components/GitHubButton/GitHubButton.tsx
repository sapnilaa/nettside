
type ButtonStyle = {
    style: string
}

function GitHubButton({ style }: ButtonStyle) {
    return (
        <a className={ style } href="https://www.github.com/sapnilaa" rel="noopener noreferrer" target="_blank">GitHub</a>
    )
}

export default GitHubButton;