const contractData = {
  issuer: {
    name: 'Bret Axl Sebastian',
    address:
      '27 Bonifacio St., Brgy. Pag-asa\nOlongapo City, Zambales\nPhilippines',
    corporateLocation: 'Subic Bay Freeport Zone',
    entity: '[Entity]',
  },
  agreement: {
    issuerType: 'academic', // academic , non-academic
  },
  agreementList: {
    /*
      startDate = could be
      1) “the first day of the month following the date that this Order Form is signed by duly authorized representatives of the parties”
      2) Other (to be entered)
    */
    isFirstDayOfMonth: true,
    startDate: '',
    term: '[TERM]',
    autoRenew: false,
    paymentTerms: 'annually', // quarterly, annually
  },
  services: {
    accessFee: 'asdf',
    allotment: 'asfdsf',
    credentialsOrEarners: 'activeEarners', // credentials, activeEarners
    willPurchaseImplementation: false,
    implementation: 'selfPaced', // selfPaced, workshop, standard,
    /*
      if credentialsOrEarners === credentials
    */
    willPurchaseHistoricCredentials: false,
    numberOfHistoricCredentials: 'asdfsdf',
    feeForHistoricCredentials: 'asdf',
    /*
      if credentialsOrEarners === activeEarners
    */
    willPurchaseHistoricalActiveEarners: false,
    numberOfHistoricalActiveEarners: 'asdf',
    feeForHistoricalActiveEarners: 'sf',

    willPurchaseTalentDirectory: false,
    talentDirectoryFee: 'sdfasd',

    willPurchaseDirectory: false,
    employeeDirectoryFee: 'sadfsdf',

    excessCredentialFee: '8888',
    excessActiveEarnerFee: '9999',
  },
}

module.exports = contractData
