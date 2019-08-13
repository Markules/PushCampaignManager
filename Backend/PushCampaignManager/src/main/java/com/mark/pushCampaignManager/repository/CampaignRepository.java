package com.mark.pushCampaignManager.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.mark.pushCampaignManager.entity.CampaignEntity;

@Repository
public interface CampaignRepository extends CrudRepository <CampaignEntity, Long> {

	


	
	
}
