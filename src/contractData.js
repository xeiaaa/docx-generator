const contractData = {
  issuer: {
    name: 'asdf',
    address: 'asf',
    corporateLocation: 'sdf',
    entity: 'asdf',
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
    term: 'asf',
    autoRenew: false,
    paymentTerms: 'annually', // quarterly, annually
  },
  services: {
    isTiered: false,
    numberOfTiers: 1,
    tierData: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    selectedTier: 0,

    accessFee: 'asdf',
    allotment: 'asdf',
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

    excessCredentialFee: 'sdfa',
    excessActiveEarnerFee: 'asdf',

    implementationFee: 'asdf',

    credentialTemplates: 'asfd',
  },
}

module.exports = contractData
