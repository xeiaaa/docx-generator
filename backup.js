// import React from 'react'
// import './App.css'
// import {
//   Button,
//   Checkbox,
//   Form,
//   Radio,
//   Container,
//   Table,
// } from 'semantic-ui-react'

// class App extends React.Component {
//   render() {
//     return (
//       <Container>
//         <Form>
//           <Form.Field>
//             <label>Legal Name of Issuer</label>
//             <input placeholder="Legal Name of Issuer" id="inputIssuerName" />
//           </Form.Field>

//           <Form.Field>
//             <label>Address of Issuer</label>
//             <textarea
//               rows="2"
//               placeholder="Address of Issuer"
//               id="txtIssuerAddress"
//             />
//           </Form.Field>

//           <Form.Field>
//             <label>State or Country of Incorporation</label>
//             <input
//               placeholder="State or Country of Incorporation"
//               id="inputIssuerLocation"
//             />
//           </Form.Field>

//           <Form.Field>
//             <label>Type of Entity</label>
//             <input placeholder="Type of Entity" id="inputEntity" />
//           </Form.Field>

//           <Form.Group inline>
//             <label>Type of Issuer:</label>
//             <Form.Field
//               control={Radio}
//               label="Yes"
//               value="yes"
//               name="radTypeIssuer"
//             />
//             <Form.Field
//               control={Radio}
//               label="No"
//               value="no"
//               name="radTypeIssuer"
//             />
//           </Form.Group>

//           <Form.Group grouped>
//             <label>Start Date: </label>
//             <Form.Field
//               control="input"
//               type="radio"
//               label="The first day of the month following the date that this Order Form is signed by duly authorized representatives of the parties"
//               value="first-day-of-the-month"
//               name="radStartDate"
//             />
//             <Form.Field
//               control="input"
//               type="radio"
//               label="Other"
//               value="other"
//               name="radStartDate"
//             />
//             <Form.Field>
//               <input placeholder="Type date" id="inputStartDate" />
//             </Form.Field>
//           </Form.Group>

//           <Form.Field>
//             <label>Term</label>
//             <input placeholder="Term" id="inputTerm" />
//           </Form.Field>

//           <Form.Group inline>
//             <label>Autorenew: </label>
//             <Form.Field
//               control="input"
//               type="radio"
//               label="Yes"
//               value="yes"
//               name="radAutorenew"
//             />
//             <Form.Field
//               control="input"
//               type="radio"
//               label="No"
//               value="no"
//               name="radAutorenew"
//             />
//           </Form.Group>

//           <Form.Group inline>
//             <label>Payment Terms: </label>
//             <Form.Field
//               control="input"
//               type="radio"
//               label="Quarterly"
//               value="quarterly"
//               name="radPaymentTerm"
//             />
//             <Form.Field
//               control="input"
//               type="radio"
//               label="Annually"
//               value="annually"
//               name="radPaymentTerm"
//             />
//           </Form.Group>

//           <Form.Field>
//             <label>Access Fee:</label>
//             <input placeholder="Access Fee" id="inputAccessFee" />
//           </Form.Field>

//           <Form.Field>
//             <label>Number of Credential or Active Earners?</label>
//             <input
//               placeholder="Number of Credential or Active Earners"
//               id="inputNumCredentialOrActEarners"
//             />
//           </Form.Field>

//           <Form.Group inline>
//             <label>Credential or Active Earners? </label>
//             <Form.Field
//               control="input"
//               type="radio"
//               label="Credential"
//               value="credential"
//               name="radCredenOrActive"
//             />
//             <Form.Field
//               control="input"
//               type="radio"
//               label="Active Earners"
//               value="active earners"
//               name="radCredenOrActive"
//             />
//           </Form.Group>

//           <Form.Group inline>
//             <label>Will the Client Purchase Implementation?</label>
//             <Form.Field
//               control="input"
//               type="radio"
//               label="Yes"
//               value="yes"
//               name="radClientPurImp"
//             />
//             <Form.Field
//               control="input"
//               type="radio"
//               label="No"
//               value="no"
//               name="radClientPurImp"
//             />
//           </Form.Group>

//           <Form.Group grouped>
//             <label>If yes, </label>
//             <label>Options:</label>
//             <Form.Field
//               control="input"
//               type="radio"
//               label="Self-Paced Onboarding"
//               value="self-paced onboarding"
//               name="radOptions"
//             />
//             <Form.Field
//               control="input"
//               type="radio"
//               label="Workshop Package"
//               value="workshop package"
//               name="radOptions"
//             />
//             <Form.Field
//               control="input"
//               type="radio"
//               label="Standard Implementation"
//               value="standard implementation"
//               name="radOptions"
//             />
//           </Form.Group>

//           <Table celled>
//             <Table.Body>
//               <Table.Row>
//                 <Table.Cell>[NAME OF IMPLEMENTATION]</Table.Cell>
//                 <Table.Cell>[TEXT OF IMPLEMENTATION]</Table.Cell>
//                 <Table.Cell>[IMPLEMENTATION FEE]</Table.Cell>
//               </Table.Row>
//             </Table.Body>
//           </Table>

//           <Form.Group grouped>
//             <label>If credential, ask </label>
//             <label>Will the client purchase Historical Credentials?</label>
//             <Form.Field
//               control="input"
//               type="radio"
//               label="Yes"
//               value="yes"
//               name="radHisCredential"
//             />
//             <Form.Field
//               control="input"
//               type="radio"
//               label="No"
//               value="no"
//               name="radHisCredential"
//             />
//           </Form.Group>

//           <label>If yes,</label>
//           <Form.Field>
//             <label>Number of Historical Credentials:</label>
//             <input
//               placeholder="Number of Historical Credentials"
//               id="inputNumHistoricCredential"
//             />
//           </Form.Field>

//           <Form.Field>
//             <label>Fee for Historical Credential:</label>
//             <input
//               placeholder="Fee for Historical Credential"
//               id="inputHistoricCredentialFee"
//             />
//           </Form.Field>

//           <Table celled>
//             <Table.Body>
//               <Table.Row>
//                 <Table.Cell>Historical Credential Allotment</Table.Cell>
//                 <Table.Cell>
//                   Issuer may issue an additional
//                   [HISTORICNUM/inputNumHistoricCredential] Credentials during
//                   the first contract year of the Term for recognition of
//                   achievements before the Effective Date of this Order Form.{' '}
//                 </Table.Cell>
//                 <Table.Cell>
//                   [HISTORICFEE/inputHistoricCredentialFee]{' '}
//                 </Table.Cell>
//               </Table.Row>
//             </Table.Body>
//           </Table>

//           <Form.Group grouped>
//             <label>If Active Earners, ask </label>
//             <label>Will the client purchase Historical Active Earners?</label>
//             <Form.Field
//               control="input"
//               type="radio"
//               label="Yes"
//               value="yes"
//               name="radHisActEarners"
//             />
//             <Form.Field
//               control="input"
//               type="radio"
//               label="No"
//               value="no"
//               name="radHisActEarners"
//             />
//           </Form.Group>

//           <label>If yes,</label>
//           <Form.Field>
//             <label>Number of Historical Active Earners:</label>
//             <input
//               placeholder="Number of Historical Credentials"
//               id="inputNumHistoricActEarn"
//             />
//           </Form.Field>

//           <Form.Field>
//             <label>Fee for Historical Active Earners:</label>
//             <input
//               placeholder="Fee for Historical Active Earners"
//               id="inputHistoricActEarnFee"
//             />
//           </Form.Field>

//           <Table celled>
//             <Table.Body>
//               <Table.Row>
//                 <Table.Cell>Historical Active Earner Allotment</Table.Cell>
//                 <Table.Cell>
//                   Issuer may issue Credentials to an additional
//                   [HISTORICNUM/inputNumHistoricActEarn] Active Earners during
//                   the first contract year of the Term for recognition of
//                   achievements before the Effective Date of this Order Form.{' '}
//                 </Table.Cell>
//                 <Table.Cell>[HISTORICFEE/inputHistoricActEarnFee] </Table.Cell>
//               </Table.Row>
//             </Table.Body>
//           </Table>

//           <Form.Group grouped>
//             <label>Will the client purchase Talent Directory?</label>
//             <Form.Field
//               control="input"
//               type="radio"
//               label="Yes"
//               value="yes"
//               name="radTalentDirectory"
//             />
//             <Form.Field
//               control="input"
//               type="radio"
//               label="No"
//               value="no"
//               name="radTalentDirectory"
//             />
//           </Form.Group>

//           <label>If yes,</label>
//           <Form.Field>
//             <label>What is the yearly fee for the Talent Directory?</label>
//             <input
//               placeholder="Number of Historical Credentials"
//               id="inputTalentDirectFee"
//             />
//           </Form.Field>

//           <Table celled>
//             <Table.Body>
//               <Table.Row>
//                 <Table.Cell>Talent Directory Access</Table.Cell>
//                 <Table.Cell>
//                   Issuer shall have access to the Talent Directory feature.{' '}
//                 </Table.Cell>
//                 <Table.Cell>$2,500 per year</Table.Cell>
//               </Table.Row>
//             </Table.Body>
//           </Table>

//           <label>If Credential, ask</label>
//           <Form.Field>
//             <label>What is the excess Credential fee?</label>
//             <input
//               placeholder="What is the excess credential fee?"
//               id="inputExcessCredentialFee"
//             />
//           </Form.Field>

//           <Table celled>
//             <Table.Body>
//               <Table.Row>
//                 <Table.Cell>Excess Credential Fee</Table.Cell>
//                 <Table.Cell>
//                   Fee to issue Credentials in excess of the limit for this
//                   Credential Package.
//                 </Table.Cell>
//                 <Table.Cell>
//                   [EXCESSCREDENTIAL/inputExcessCredentialFee] per excess
//                   Credential
//                 </Table.Cell>
//               </Table.Row>
//             </Table.Body>
//             ßß
//           </Table>

//           <label>If Active Earners, ask</label>
//           <Form.Field>
//             <label>What is the excess Active Earners fee?</label>
//             <input
//               placeholder="What is the excess Active Earners fee?"
//               id="inputExcessActEarnersFee"
//             />
//           </Form.Field>

//           <Table celled>
//             <Table.Body>
//               <Table.Row>
//                 <Table.Cell>Excess Active Earner Fee</Table.Cell>
//                 <Table.Cell>
//                   Fee to issue Credentials to Earners in excess of the Active
//                   Earner limit.{' '}
//                 </Table.Cell>
//                 <Table.Cell>
//                   [EXCESSACTIVEEARNER/inputExcessActEarnersFee] per excess
//                   Active Earner
//                 </Table.Cell>
//               </Table.Row>
//             </Table.Body>
//           </Table>
//         </Form>
//       </Container>
//     )
//   }
// }

// export default App
