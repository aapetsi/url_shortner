import app from './server'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server is running on port ${PORT}`)
})