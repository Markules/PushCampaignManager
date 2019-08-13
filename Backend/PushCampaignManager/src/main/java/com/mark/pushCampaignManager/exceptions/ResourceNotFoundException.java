package com.mark.pushCampaignManager.exceptions;

import com.mark.pushCampaignManager.enums.ErrorType;

public class ResourceNotFoundException extends Exception {

	private static final long serialVersionUID = 1L;
	
	Exception e;
	ErrorType errorType;
	
	public ResourceNotFoundException(Exception e, ErrorType errorType, String message) {
		super(message);
		this.e = e;
		this.errorType = errorType;
	}
}
