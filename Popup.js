import { LightningElement , track ,api} from 'lwc';
	import { ShowToastEvent } from 'lightning/platformShowToastEvent';
	export default class Model extends LightningElement {
	    @track customFormModal = false;
	    @api recordId;
	    @api myRecordId;
	    redirect = true;
	    resetpage = true;
	    @api objectApiName;
	   objectApiName='Project__c';
	  
	    
	    customShowModalPopup() {            
	        this.customFormModal = true;
	    }
	 
	    customHideModalPopup() {    
	        
	        this.customFormModal = false;
	    }
	    
	
	    get encryptedToken() {
	      
	    }
	
	    get acceptedFormats() {
	        return ['.pdf', '.png'];
	    }
	
	    handleUploadFinished(event) {
	      
	        const uploadedFiles = event.detail.Files;
	        alert("No. of files uploaded : " + uploadedFiles.length);
	    }
	   
	    
	    handleCancel(){
	        this.customFormModal=false;
	    }
	    handleSave(){
			this.customFormModal = false;
			
	        this.template.querySelector('lightning-record-edit-form').submit(this.fields);
	        
	        const evt = new ShowToastEvent({
	            title: 'Project Created',
	            message: 'Record has been added Successfully',
	            variant: 'success',
	            mode: 'dismissable'
	        });
	        this.dispatchEvent(evt);
			
	      }
	      SaveAndNew() {
			
		
			this.redirect=false;
			this.template.querySelector('lightning-record-edit-form').submit(this.fields);
			
			this.resetpage=true;
			
			
	        const evt = new ShowToastEvent({
	            title: 'Project Created',
	            message: 'Record has been added Successfully',
	            variant: 'success',
	            mode: 'dismissable'
			});
			
				
	      
			
	        this.dispatchEvent(evt);
		
			
			
	      
	    }
	    handleError(event){
			const evt = new ShowToastEvent({
				title: 'Error!',
				message: 'Fields are Missing',
				variant: 'error',
				mode:'dismissable'
			});
			this.dispatchEvent(evt);
		}
	    handleReset(event) {
	      
	       const inputFields = this.template.querySelectorAll('lightning-input-field');
	       if (inputFields) {
	           inputFields.forEach(field => {
	               field.reset();
	           });
	       }
	    }
	}
