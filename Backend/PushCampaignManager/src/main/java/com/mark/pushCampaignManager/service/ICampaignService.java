package com.mark.pushCampaignManager.service;

import java.util.List;

import com.mark.pushCampaignManager.entity.CampaignEntity;

public interface ICampaignService {
	
	public List<CampaignEntity> findAll();
	
}
