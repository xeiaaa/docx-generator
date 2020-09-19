import React, { useState } from 'react'
import axios from 'axios'
import moment from 'moment'

import './App.css'
import {
  Button,
  Form,
  Radio,
  Container,
  Header,
  Input,
  Divider,
} from 'semantic-ui-react'

import contractData from './contractData'

const App = (props) => {
  const [body, setBody] = useState({ ...contractData })

  const setData = (parentKey, key, value) => {
    setBody((prevBody) => {
      const newBody = { ...prevBody }
      newBody[parentKey][key] = value
      return { ...newBody }
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    let res = await axios.post(
      // 'https://docx-generator-sample.herokuapp.com/docx',
      'http://localhost:5000/docx',
      body,
      {
        responseType: 'blob',
      },
    )
    const url = window.URL.createObjectURL(new Blob([res.data]))
    const link = document.createElement('a')
    link.href = url
    const fileName = `Credly – Credential Package Order Form – ${
      body.issuer.name
    } (${moment().format('MMMM DD, YYYY')}) v0.1.docx`
    link.setAttribute('download', fileName) //or any other extension
    document.body.appendChild(link)
    link.click()
  }

  return (
    <Container>
      <Form onSubmit={submitHandler} style={{ paddingBottom: 20 }}>
        <Header as="h1" style={{ marginTop: 20 }}>
          Credly Order Form Generator
        </Header>
        {/* Issuer Name */}
        <Form.Field required>
          <label>Legal Name of Issuer</label>
          <Input
            // placeholder="Full name"
            required
            value={body.issuer.name}
            onChange={(e) => {
              setData('issuer', 'name', e.target.value)
            }}
          />
        </Form.Field>

        {/* Issuer Address */}
        <Form.Field required>
          <label>Address of Issuer</label>
          <textarea
            rows="4"
            // placeholder="Address of Issuer"
            value={body.issuer.address}
            required
            onChange={(e) => {
              setData('issuer', 'address', e.target.value)
            }}
          />
        </Form.Field>

        {/* Issuer Corporate Location */}
        <Form.Field required>
          <label>State or Country of Incorporation</label>
          <input
            required
            value={body.issuer.corporateLocation}
            onChange={(e) => {
              setData('issuer', 'corporateLocation', e.target.value)
            }}
          />
        </Form.Field>

        {/* Issuer Entity */}
        <Form.Field required>
          <label>
            Type of Entity (corporation, institution of higher education, etc…)
          </label>
          <input
            required
            value={body.issuer.entity}
            onChange={(e) => {
              setData('issuer', 'entity', e.target.value)
            }}
          />
        </Form.Field>

        {/* Issuer Type */}
        <Form.Group inline>
          <label>Type of Issuer:</label>
          <Form.Field
            control={Radio}
            label="Academic"
            value="academic"
            name="typeOfIssuer"
            checked={body.agreement.issuerType === 'academic'}
            onChange={(e, { value }) =>
              setData('agreement', 'issuerType', value)
            }
          />
          <Form.Field
            control={Radio}
            label="Non-Academic"
            value="non-academic"
            name="typeOfIssuer"
            checked={body.agreement.issuerType === 'non-academic'}
            onChange={(e, { value }) =>
              setData('agreement', 'issuerType', value)
            }
          />
        </Form.Group>

        {/* Start Date */}
        <Form.Group grouped>
          <label>Start Date: </label>
          <Form.Field
            control={Radio}
            label="The first day of the month following the date that this Order Form is signed by duly authorized representatives of the parties"
            value={true}
            name="radStartDate"
            checked={body.agreementList.isFirstDayOfMonth === true}
            onChange={(e, { value }) =>
              setData('agreementList', 'isFirstDayOfMonth', value)
            }
          />
          <Form.Field
            control={Radio}
            label="Other"
            value={false}
            name="false"
            checked={body.agreementList.isFirstDayOfMonth === false}
            onChange={(e, { value }) =>
              setData('agreementList', 'isFirstDayOfMonth', value)
            }
          />
          {!body.agreementList.isFirstDayOfMonth && (
            <Form.Field required>
              <input
                type="date"
                required
                value={body.agreementList.startDate}
                onChange={(e) => {
                  setData('agreementList', 'startDate', e.target.value)
                }}
              />
            </Form.Field>
          )}
        </Form.Group>

        {/* Term */}
        <Form.Field required>
          <label>Term</label>
          <input
            required
            value={body.agreementList.term}
            onChange={(e) => {
              setData('agreementList', 'term', e.target.value)
            }}
          />
        </Form.Field>

        {/* Auto Renew */}
        <Form.Group inline>
          <label>Autorenew:</label>
          <Form.Field
            control={Radio}
            label="Yes"
            value={true}
            name="autorenew"
            checked={body.agreementList.autoRenew === true}
            onChange={(e, { value }) =>
              setData('agreementList', 'autoRenew', value)
            }
          />
          <Form.Field
            control={Radio}
            label="No"
            value={false}
            name="autorenew"
            checked={body.agreementList.autoRenew === false}
            onChange={(e, { value }) =>
              setData('agreementList', 'autoRenew', value)
            }
          />
        </Form.Group>

        {/* Payment Terms */}
        <Form.Group inline>
          <label>Payment Terms:</label>
          <Form.Field
            control={Radio}
            label="Quarterly"
            value="quarterly"
            name="paymentTerms"
            checked={body.agreementList.paymentTerms === 'quarterly'}
            onChange={(e, { value }) =>
              setData('agreementList', 'paymentTerms', value)
            }
          />
          <Form.Field
            control={Radio}
            label="Annually"
            value="annually"
            name="paymentTerms"
            checked={body.agreementList.paymentTerms === 'annually'}
            onChange={(e, { value }) =>
              setData('agreementList', 'paymentTerms', value)
            }
          />
        </Form.Group>

        {/* Access Fee */}
        <Form.Field required>
          <label>Access Fee</label>
          <Input
            required
            value={body.services.accessFee}
            onChange={(e) => {
              setData('services', 'accessFee', e.target.value)
            }}
          />
        </Form.Field>

        {/* Allotment */}
        <Form.Field required>
          <label>Number of Credentials or Active Earners</label>
          <Input
            required
            value={body.services.allotment}
            onChange={(e) => {
              setData('services', 'allotment', e.target.value)
            }}
          />
        </Form.Field>

        {/* Creds / Active Earners */}
        <Form.Group inline>
          <label>Credentials or Active Earners?</label>
          <Form.Field
            control={Radio}
            label="Credentials"
            value="credentials"
            name="credentialsOrEarners"
            checked={body.services.credentialsOrEarners === 'credentials'}
            onChange={(e, { value }) =>
              setData('services', 'credentialsOrEarners', value)
            }
          />
          <Form.Field
            control={Radio}
            label="Active Earners"
            value="activeEarners"
            name="credentialsOrEarners"
            checked={body.services.credentialsOrEarners === 'activeEarners'}
            onChange={(e, { value }) =>
              setData('services', 'credentialsOrEarners', value)
            }
          />
        </Form.Group>

        {/* Purchase Implementation? */}
        <Form.Group grouped>
          <Form.Group inline>
            <label>Will the client purchase Implementation?</label>
            <Form.Field
              control={Radio}
              label="Yes"
              value={true}
              name="willPurchaseImplementation"
              checked={body.services.willPurchaseImplementation === true}
              onChange={(e, { value }) =>
                setData('services', 'willPurchaseImplementation', value)
              }
            />
            <Form.Field
              control={Radio}
              label="No"
              value={false}
              name="willPurchaseImplementation"
              checked={body.services.willPurchaseImplementation === false}
              onChange={(e, { value }) =>
                setData('services', 'willPurchaseImplementation', value)
              }
            />
          </Form.Group>
          {body.services.willPurchaseImplementation && (
            <React.Fragment>
              <Form.Field inline required>
                <label>Select Implementation</label>
                <select
                  required
                  value={body.services.implementation}
                  onChange={(e) => {
                    setData('services', 'implementation', e.target.value)
                  }}
                >
                  <option value="selfPaced">Self-Paced Onboarding</option>
                  <option value="workshop">Workshop Package</option>
                  <option value="standard">Standard Implementation </option>
                </select>
              </Form.Field>

              <Form.Field inline required>
                <label>Implementation Fee?</label>
                <Input
                  required
                  value={body.services.implementationFee}
                  onChange={(e) => {
                    setData('services', 'implementationFee', e.target.value)
                  }}
                />
              </Form.Field>
            </React.Fragment>
          )}
        </Form.Group>

        {/* Excess Fees Credentials */}
        {body.services.credentialsOrEarners === 'credentials' ? (
          <Form.Group grouped>
            <Form.Group inline>
              <label>Will the client purchase Historical Credentials?</label>
              <Form.Field
                control={Radio}
                label="Yes"
                value={true}
                name="willPurchaseHistoricCredentials"
                checked={body.services.willPurchaseHistoricCredentials === true}
                onChange={(e, { value }) =>
                  setData('services', 'willPurchaseHistoricCredentials', value)
                }
              />
              <Form.Field
                control={Radio}
                label="No"
                value={false}
                name="willPurchaseHistoricCredentials"
                checked={
                  body.services.willPurchaseHistoricCredentials === false
                }
                onChange={(e, { value }) =>
                  setData('services', 'willPurchaseHistoricCredentials', value)
                }
              />
            </Form.Group>
            {body.services.willPurchaseHistoricCredentials && (
              <React.Fragment>
                <Form.Field required inline>
                  <label>Number of Historical Credentials</label>
                  <Input
                    required
                    value={body.services.numberOfHistoricCredentials}
                    onChange={(e) => {
                      setData(
                        'services',
                        'numberOfHistoricCredentials',
                        e.target.value,
                      )
                    }}
                  />
                </Form.Field>
                <Form.Field required inline>
                  <label>Fee for Historical Credentials </label>
                  <Input
                    required
                    value={body.services.feeForHistoricCredentials}
                    onChange={(e) => {
                      setData(
                        'services',
                        'feeForHistoricCredentials',
                        e.target.value,
                      )
                    }}
                  />
                </Form.Field>
              </React.Fragment>
            )}
          </Form.Group>
        ) : (
          <Form.Group grouped>
            <Form.Group inline>
              <label>Will the client purchase Historical Active Earners?</label>
              <Form.Field
                control={Radio}
                label="Yes"
                value={true}
                name="willPurchaseHistoricalActiveEarners"
                checked={
                  body.services.willPurchaseHistoricalActiveEarners === true
                }
                onChange={(e, { value }) =>
                  setData(
                    'services',
                    'willPurchaseHistoricalActiveEarners',
                    value,
                  )
                }
              />
              <Form.Field
                control={Radio}
                label="No"
                value={false}
                name="willPurchaseHistoricalActiveEarners"
                checked={
                  body.services.willPurchaseHistoricalActiveEarners === false
                }
                onChange={(e, { value }) =>
                  setData(
                    'services',
                    'willPurchaseHistoricalActiveEarners',
                    value,
                  )
                }
              />
            </Form.Group>
            {body.services.willPurchaseHistoricalActiveEarners && (
              <React.Fragment>
                <Form.Field required inline>
                  <label>Number of Historical Active Earners </label>
                  <Input
                    required
                    value={body.services.numberOfHistoricalActiveEarners}
                    onChange={(e) => {
                      setData(
                        'services',
                        'numberOfHistoricalActiveEarners',
                        e.target.value,
                      )
                    }}
                  />
                </Form.Field>
                <Form.Field required inline>
                  <label>Fee for Historical Active Earners</label>
                  <Input
                    required
                    value={body.services.feeForHistoricalActiveEarners}
                    onChange={(e) => {
                      setData(
                        'services',
                        'feeForHistoricalActiveEarners',
                        e.target.value,
                      )
                    }}
                  />
                </Form.Field>
              </React.Fragment>
            )}
          </Form.Group>
        )}

        {/* Purchase Talent Directory? */}
        <Form.Group grouped>
          <Form.Group inline>
            <label>Will the client purchase Talent Directory?</label>
            <Form.Field
              control={Radio}
              label="Yes"
              value={true}
              name="willPurchaseTalentDirectory"
              checked={body.services.willPurchaseTalentDirectory === true}
              onChange={(e, { value }) =>
                setData('services', 'willPurchaseTalentDirectory', value)
              }
            />
            <Form.Field
              control={Radio}
              label="No"
              value={false}
              name="willPurchaseTalentDirectory"
              checked={body.services.willPurchaseTalentDirectory === false}
              onChange={(e, { value }) =>
                setData('services', 'willPurchaseTalentDirectory', value)
              }
            />
          </Form.Group>
          {body.services.willPurchaseTalentDirectory && (
            <Form.Field inline required>
              <label>What is the yearly fee for Talent Directory?</label>
              <Input
                required
                value={body.services.talentDirectoryFee}
                onChange={(e) => {
                  setData('services', 'talentDirectoryFee', e.target.value)
                }}
              />
            </Form.Field>
          )}
        </Form.Group>

        {/* Purchase Employee Directory? */}
        <Form.Group grouped>
          <Form.Group inline>
            <label>Will the client purchase Employee Directory?</label>
            <Form.Field
              control={Radio}
              label="Yes"
              value={true}
              name="willPurchaseDirectory"
              checked={body.services.willPurchaseDirectory === true}
              onChange={(e, { value }) =>
                setData('services', 'willPurchaseDirectory', value)
              }
            />
            <Form.Field
              control={Radio}
              label="No"
              value={false}
              name="willPurchaseDirectory"
              checked={body.services.willPurchaseDirectory === false}
              onChange={(e, { value }) =>
                setData('services', 'willPurchaseDirectory', value)
              }
            />
          </Form.Group>
          {body.services.willPurchaseDirectory && (
            <Form.Field inline required>
              <label>What is the yearly fee for Employee Directory?</label>
              <Input
                required
                value={body.services.employeeDirectoryFee}
                onChange={(e) => {
                  setData('services', 'employeeDirectoryFee', e.target.value)
                }}
              />
            </Form.Field>
          )}
        </Form.Group>

        {body.services.credentialsOrEarners === 'credentials' ? (
          <Form.Field inline required>
            <label>What is the excess Credential Fee?</label>
            <Input
              required
              value={body.services.excessCredentialFee}
              onChange={(e) => {
                setData('services', 'excessCredentialFee', e.target.value)
              }}
            />
          </Form.Field>
        ) : (
          <Form.Field inline required>
            <label>Excess Active Earner Fee?</label>
            <Input
              required
              value={body.services.excessActiveEarnerFee}
              onChange={(e) => {
                setData('services', 'excessActiveEarnerFee', e.target.value)
              }}
            />
          </Form.Field>
        )}

        <Button primary>Generate Contract</Button>
      </Form>
      {/* <pre>{JSON.stringify(body.services, null, 2)}</pre> */}
    </Container>
  )
}

export default App
