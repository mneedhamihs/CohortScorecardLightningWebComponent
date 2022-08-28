import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import PERCENTILE_CITATIONS_FIELD from '@salesforce/schema/Contact.Percentile_Citations__c';
import PERCENTILE_PUBLICATIONS_FIELD from '@salesforce/schema/Contact.Percentile_Publications__c';
import CITATIONS_COUNT_FIELD from '@salesforce/schema/Contact.Dimensions_Citations_Total__c';
import PUBLICATIONS_COUNT_FIELD from '@salesforce/schema/Contact.Dimensions_Total_Publications__c';
import COHORT_CITATIONS_AVERAGE_FIELD from '@salesforce/schema/Contact.Cohort__r.Average_Total_Citations__c';
import COHORT_PUBLICATIONS_AVERAGE_FIELD from '@salesforce/schema/Contact.Cohort__r.Average_Number_Of_Publications__c';

const fields = [
    PERCENTILE_CITATIONS_FIELD, 
    PERCENTILE_PUBLICATIONS_FIELD, 
    CITATIONS_COUNT_FIELD, 
    PUBLICATIONS_COUNT_FIELD,
    COHORT_CITATIONS_AVERAGE_FIELD,
    COHORT_PUBLICATIONS_AVERAGE_FIELD
];

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

    get citationsCount() {
        return getFieldValue(this.contact.data, CITATIONS_COUNT_FIELD);
    }

    get publicationsCount() {
        return getFieldValue(this.contact.data, PUBLICATIONS_COUNT_FIELD);
    }

    get citationsAverage() {
        return 10 ** getFieldValue(this.contact.data, COHORT_CITATIONS_AVERAGE_FIELD);
    }

    get publicationsAverage() {
        return 10 ** getFieldValue(this.contact.data, COHORT_PUBLICATIONS_AVERAGE_FIELD);
    }
}