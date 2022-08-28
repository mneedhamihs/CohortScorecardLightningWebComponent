import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import PERCENTILE_CITATIONS_FIELD from '@salesforce/schema/Contact.Percentile_Citations__c';
import PERCENTILE_PUBLICATIONS_FIELD from '@salesforce/schema/Contact.Percentile_Publications__c';

const fields = [PERCENTILE_CITATIONS_FIELD, PERCENTILE_PUBLICATIONS_FIELD];

export default class CohortScorecard extends LightningElement {
    @api recordId;
    @api objectApiName;

    @wire(getRecord, { recordId: '$recordId', fields })
    contact;

    get citationsPercentile() {
        return getFieldValue(this.contact.data, PERCENTILE_CITATIONS_FIELD);
    }

    get publicationsPercentile() {
        return getFieldValue(this.contact.data, PERCENTILE_PUBLICATIONS_FIELD);
    }
}