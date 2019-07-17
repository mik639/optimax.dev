declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}

declare module '*.jpg' {
  const content: string
  export default content
}
declare module '*.png' {
  const content: string
  export default content
}
declare module '*.svg' {
  const content: { id: string; viewBox: string }
  export default content
}
