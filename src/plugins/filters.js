import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', function (value) {
  if (value) {
    // return moment(String(value)).format('DD/MM/YYYY HH:mm')
    return moment(String(value)).format('DD/MM/YYYY')
  }
})

Vue.filter('excerpt', function (value) {
  const maxLength = 150
  if (value && value.length > maxLength) {
    return value.substr(0, maxLength) + ' ...'
  } else {
    return value
  }
})
