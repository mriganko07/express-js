export default function login() {
    
    return (`
      <form action="/submit"  method="post" >
          <input type="text" placeholder="Name">
          <input type="password" name="" id="" placeholder="Password">
          <button type="submit">Submit</button>
      </form>    
    `)
}