export const credentials = {
  standard_user: {
    username: process.env.STANDART_USERNAME || 'standard_user',
    password: process.env.PASSWORD || 'secret_sauce',
  },

  locked_out_user: {
    username: process.env.LOCKED_USERNAME || 'locked_out_user',
    password: process.env.PASSWORD || 'secret_sauce',
  },
}
