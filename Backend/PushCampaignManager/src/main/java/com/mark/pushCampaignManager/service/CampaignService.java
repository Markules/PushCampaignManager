package com.mark.pushCampaignManager.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mark.pushCampaignManager.entity.CampaignEntity;
import com.mark.pushCampaignManager.repository.CampaignRepository;

@Service
public class CampaignService implements ICampaignService {

	@Autowired
	private CampaignRepository campaignRepository;
	
	@Override
	public List<CampaignEntity> findAll() {
		
		List<CampaignEntity> campaigns = (List<CampaignEntity>) campaignRepository.findAll();
		return campaigns;
	}
}
