const createObject = () => (
  {
    gasStation: {
      code: '978546311',
      NIF: 'faf79f48af9',
      country: 'Portugal'
    },
    vehicle: {
      registrationNumber: '78-KB-84',
      registrationCountry: 'Portugal',
      NFCCardNumber: '78456123',
      gasType: 'Gasoléo',
      maxWeightCapacity: '900'
    },
    supply: {
      date: '12/01/17 - 12h47',
      liters: '800',
      price: '1.44'
    },
    invoice: {
      number: '35 - 01/15',
      date: '14/02/14 - 13h48'
    }
  }
)

exports.test = (req, res) => {
  var obj = createObject()
  return res.json(obj)
}

exports.registerInfo = (req, res) => {
  return res.send(req.body)
}
