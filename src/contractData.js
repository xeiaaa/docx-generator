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
    accessFee: '',
    allotment: '',
    credentialsOrEarners: 'activeEarners', // credentials, activeEarners
    willPurchaseImplementation: false,
    implementation: 'selfPaced', // selfPaced, workshop, standard,
    /*
      if credentialsOrEarners === credentials
    */
    willPurchaseHistoricCredentials: false,
    numberOfHistoricCredentials: '',
    feeForHistoricCredentials: '',
    /*
      if credentialsOrEarners === activeEarners
    */
    willPurchaseHistoricalActiveEarners: false,
    numberOfHistoricalActiveEarners: '',
    feeForHistoricalActiveEarners: '',

    willPurchaseTalentDirectory: false,
    talentDirectoryFee: '',

    willPurchaseDirectory: false,
    employeeDirectoryFee: '',

    excessCredentialFee: '8888',
    excessActiveEarnerFee: '9999',
  },
}

module.exports = contractData
